import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'

interface BackdropProps {
  backdrop: string
}

export function Backdrop({ backdrop }: BackdropProps) {
  return (
    <div className="container overflow-hidden">
      <AspectRatio ratio={16 / 9}>
        <Image
          className="rounded-xl"
          src={`https://image.tmdb.org/t/p/original${backdrop}`}
          alt="backdrop"
          fill
        />
      </AspectRatio>
    </div>
  )
}
