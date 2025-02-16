'use client'
import Image from 'next/image'
import '../../styles/hero.css'

export default function CloudsLayer() {
    return (
        <div className="clouds-layer" aria-hidden="true">
            <div className="clouds-container">
                <Image
                    src="/webps/images/CLOUD-1.webp"
                    alt=""
                    width={750}
                    height={550}
                    className="cloud-layer-1"
                    priority
                />
                <Image
                    src="/webps/images/CLOUD-2.webp"
                    alt=""
                    width={750}
                    height={550}
                    className="cloud-layer-2"
                    priority
                />
                <Image
                    src="/webps/images/CLOUD-3.webp"
                    alt=""
                    width={3010}
                    height={800}
                    className="cloud-layer-3"
                    priority
                />
            </div>
        </div>
    )
} 