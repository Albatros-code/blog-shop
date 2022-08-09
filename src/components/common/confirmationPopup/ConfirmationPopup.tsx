import clsx from 'clsx'
import React from 'react'
import Button from '../../inputs/Button'
import styles from './ConfirmationPopup.module.css'

interface ConfirmationPopupProps {
    text: string | JSX.Element
    btnOkLabel: string
    btnCancelLabel: string
    onOk: () => void
    onCancel: () => void
    className?: string
}

const ConfirmationPopup = ({
    text,
    btnOkLabel,
    btnCancelLabel,
    onOk,
    onCancel,
    className
}: ConfirmationPopupProps) => {

    return (
        <div className={clsx(styles.container, className)}>
            {typeof text === "string" ? <p>{text}</p> : text }
            <div className={styles.btnContainer}>
                <Button onClick={onOk}>{btnOkLabel}</Button>
                <Button onClick={onCancel} variant='secondary'>{btnCancelLabel}</Button>
            </div>
        </div>
    )
}

export default ConfirmationPopup