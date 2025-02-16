'use client'
import dynamic from 'next/dynamic'
import dashboardAnimation from '../../assets/lotties/dashboard.json'
import workflowAnimation from '../../assets/lotties/workflow.json'
import educationAnimation from '../../assets/lotties/education.json'
import successAnimation from '../../assets/lotties/success.json'

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
    style: {
      width: '500px',
      height: '400px',
      position: 'absolute',
      right: '-50px',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  },
  workflow: {
    data: workflowAnimation,
    style: {
      width: '300px',
      height: '300px',
      position: 'absolute',
      right: '-30px',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  },
  education: {
    data: educationAnimation,
    style: {
      width: '300px',
      height: '300px',
      position: 'absolute',
      right: '-30px',
      top: '50%',
      transform: 'translateY(-50%)'
    }
  },
  success: {
    data: successAnimation,
    style: {
      width: '400px',
      height: '400px',
      position: 'absolute',
      right: '50%',
      top: '50%',
      transform: 'translate(50%, -50%)'
    }
  }
}