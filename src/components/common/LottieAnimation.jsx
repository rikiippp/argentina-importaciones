'use client'
import dynamic from 'next/dynamic'
import dashboardAnimation from '../../assets/lotties/dashboard.json'
import workflowAnimation from '../../assets/lotties/workflow.json'
import educationAnimation from '../../assets/lotties/education.json'
import successAnimation from '../../assets/lotties/shipping.json'

// Importación dinámica de Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

export default function LottieAnimation({ animationData, className, ...props }) {
  return (
    <Lottie 
      animationData={animationData}
      className={className}
      loop={true}
      autoplay={true}
      {...props}
    />
  )
}

export const serviceAnimations = {
  dashboard: {
    data: dashboardAnimation,
    className: 'lottie-dashboard'
  },
  workflow: {
    data: workflowAnimation,
    className: 'lottie-workflow'
  },
  education: {
    data: educationAnimation,
    className: 'lottie-education'
  },
  success: {
    data: successAnimation,
    className: 'lottie-shipping'
  }
}