import { createPopper, Placement } from '@popperjs/core'
import React from 'react'

interface UsePopupProps {
	el: HTMLElement | null
	anchorEl: HTMLElement | null
	placement?: Placement
}

const usePopup = ({
	el,
	anchorEl,
	placement = 'bottom'
}: UsePopupProps) => {
  
	React.useEffect(() => {
		if (el && anchorEl) {
            createPopper(anchorEl, el, {placement})
        }
	}, [anchorEl, el, placement])

	return (null)
}

export default usePopup