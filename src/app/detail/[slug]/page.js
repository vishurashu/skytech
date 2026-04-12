import React from 'react'
import DetailProject from '../../component/datailProject'

export function generateStaticParams() {
    return [
      { slug: "meridian" },
      { slug: "heimdall-power" },
      { slug: "cula" },
      { slug: "arqitel" },
    ];
  }

const page = ({ params }) => {
  return (
    <DetailProject slug={params.slug} />
  )
}

export default page