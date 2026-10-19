'use client' // ✅ essencial para Next 13+

import * as React from 'react'
import { Masonry } from '@mui/lab' // ✅ agora vem do material
import { Box } from '@mui/material'

const MasonryGallery = ({ post }) => {
  if (!post) return null

  return (
    <article id={post.id}>
      <div className="container mx-auto portfolio-single-masonry mt-2">
        <Masonry columns={{ xs: 2, sm: 2, md: 2 }} spacing={1}>
          {post.meta?.galeria_imagens?.map((url, index) => (
            <Box
              key={index}
              component="img"
              src={url}
              alt={`Imagem ${index + 1}`}
              sx={{
                width: '100%',
                display: 'block',
                borderRadius: 0,
                boxShadow: 0,
                py: 1,
                px: 1
              }}
            />
          ))}
        </Masonry>

        <div className="max-w-screen-md mx-auto p-4">
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      </div>
    </article>
  )
}

export default MasonryGallery