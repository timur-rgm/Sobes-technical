import { useState } from 'react'

import Image from 'next/image'
import { Typography, Box, Button, Container } from '@mui/material'

import PlayIcon from '@/public/play-icon.svg'
import StopIcon from '@/public/stop-icon.svg'
import { Answer, Question } from '@/types/questions'

import styles from './VideoQuestion.module.scss'

type Props = {
    onSubmit: (id: number, value: Answer) => void
    question: Question
}

export default function VideoQuestion({ onSubmit, question }: Props) {
    const [audioUrl, setAudioUrl] = useState<string>('')
    // const [status, setStatus] = useState<'init' | 'recording' | 'recorded'>('init')

    let gumStream: MediaStream | null = null
    let recorder: any = null
    let audioContext: any = null

    const handleStart = () => {
        let constraints = {
            audio: true,
            video: false,
        }

        audioContext = new window.AudioContext()

        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
                gumStream = stream

                let input = audioContext.createMediaStreamSource(stream)

                // @ts-ignore
                recorder = new window.Recorder(input, {
                    numChannels: 1,
                })

                recorder?.record()
            })
            .catch((err) => console.log(err)) // eslint-disable-line no-console
    }

    const handleStop = () => {
        recorder?.stop()
        gumStream?.getAudioTracks()[0].stop()
        recorder.exportWAV(onStop)
    }

    const onStop = (blob: Blob) => {
        const url = URL.createObjectURL(blob)
        setAudioUrl(url)

        // recorder.exportWAV(() => {
        //     let data = new FormData()
        //
        //     data.append('text', 'this is the transcription of the audio file')
        //     data.append('wavfile', blob, 'recording.wav')
        //
        //     fetch('http://localhost:3000', {
        //         method: 'POST',
        //         headers: { 'content-type': 'multipart/form-data' },
        //         body: data,
        //     })
        // })
    }

    const handleSubmit = () => {
        onSubmit(question.id, audioUrl)
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
                        onClick={handleStart}
                        startIcon={<Image alt="Загрузка" height={15} src={PlayIcon} width={15} />}
                        variant="contained"
                    >
                        Запись
                    </Button>

                    <Button
                        component="label"
                        onClick={handleStop}
                        startIcon={<Image alt="Загрузка" height={20} src={StopIcon} width={20} />}
                        variant="contained"
                    >
                        Стоп
                    </Button>
                </Box>

                {audioUrl && <audio className={styles.audio} controls src={audioUrl} />}

                <Button classes={{ root: styles.button }} onClick={handleSubmit} size="small" variant="contained">
                    Следующий
                </Button>
            </Container>
        </>
    )
}
