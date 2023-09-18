import { ChangeEvent, useState } from 'react'

import Image from 'next/image'
import { Typography, Container, Button, Input, Box } from '@mui/material'

import ClickIcon from '@/public/click-icon.svg'
import UploadIcon from '@/public/upload-icon.svg'
import { Answer, Question } from '@/types/questions'

import styles from './PhotoQuestion.module.scss'

type Props = {
    onSubmit: (id: number, value: Answer) => void
    question: Question
}

export default function PhotoQuestion({ onSubmit, question }: Props) {
    const [file, setFile] = useState<File | null>(null)
    const [status, setStatus] = useState<'init' | 'loading' | 'success' | 'error'>('init')
    const [imageUrl, setImgUrl] = useState<string>('')

    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setFile(null)
        setStatus('init')
        setImgUrl('')

        if (evt.target.files) {
            setFile(evt.target.files[0])
        }
    }

    const handleUpload = () => {
        if (!file) {
            setStatus('init')

            return
        }

        setStatus('loading')

        const data = new FormData()
        data.append('file', file)
        data.append('key', '6d207e02198a847aa98d0a2a901485a5')
        data.append('action', 'upload')
        data.append('format', 'json')
        data.append('source', file)

        fetch('http://localhost:8010/proxy/api/1/upload', {
            method: 'POST',
            body: data,
        })
            .then((response) => response.json())
            .then((data) => {
                setStatus('success')
                setImgUrl(data.image.url)
            })
            .catch(() => setStatus('error'))
    }

    const handleSubmit = () => {
        onSubmit(question.id, imageUrl)
    }

    return (
        <>
            <Typography classes={{ root: styles.title }} component="h2">
                {question.title}
            </Typography>

            <Container classes={{ root: styles.content }}>
                <Box className={styles.container}>
                    <Button
                        component="label"
                        startIcon={<Image alt="Загрузка" height={20} src={ClickIcon} width={20} />}
                        variant="contained"
                    >
                        Выбрать
                        <Input classes={{ root: styles.input }} onChange={handleChange} type="file" />
                    </Button>
                    <Button
                        component="label"
                        disabled={!file || status === 'loading'}
                        onClick={handleUpload}
                        startIcon={<Image alt="Загрузка" height={20} src={UploadIcon} width={20} />}
                        variant="contained"
                    >
                        Загрузить
                    </Button>
                </Box>

                {file && (
                    <Typography classes={{ root: styles.fileName }} component="h2">
                        {file.name}
                    </Typography>
                )}

                {imageUrl && (
                    <Image
                        alt="Загруженное изображение"
                        className={styles.uploadedImage}
                        height="150"
                        src={imageUrl}
                        width={150}
                    />
                )}

                <Button
                    classes={{ root: styles.button }}
                    disabled={status !== 'success'}
                    onClick={handleSubmit}
                    size="small"
                    variant="contained"
                >
                    Следующий
                </Button>
            </Container>
        </>
    )
}
