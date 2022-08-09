import dynamic from 'next/dynamic'

const DynamicPopup = dynamic(() => import('./PopupBase'), {
  ssr: false,
})

export default DynamicPopup