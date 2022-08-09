import clsx from 'clsx'
import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Popup.module.css'
import usePopup from './usePopup'

interface PopupProps {
	anchorEl: HTMLElement | null
	open: boolean
	onClose?: () => void
	render: () => React.ReactNode
}

const Popup = ({
	anchorEl,
	open,
	onClose,
	render
}: PopupProps): React.ReactPortal => {

	const ref = React.useRef<HTMLDivElement | null>(null)
	usePopup({el: ref.current, anchorEl: anchorEl})

	const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		onClose && onClose()
	}

	return ReactDOM.createPortal(
		<div className={clsx(styles.container, open && styles.open)}>
			<button className={styles.background} onClick={(e) => handleClose(e)} tabIndex={-1}/>
			<div ref={ref} className={styles.popupContainer}>
				{render && render()}
			</div>
		</div>
		, document.body)
	
}

export default Popup
