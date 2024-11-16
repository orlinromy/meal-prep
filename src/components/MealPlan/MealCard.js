import { Card, Box, Chip, Skeleton } from '@mui/material'
import React, { useState } from 'react'

const MealCard = (props) => {
  function handleClick(e) {
    props.doubleClicked(props.data)
  }

  function mealLabel(i) {
    switch (i % props.meal) {
      case 0:
        return 'Breakfast'
      case 1:
        return 'Lunch'
      case 2:
        return 'Dinner'
      case 3:
        return 'Snack'
      case 4:
        return 'Teatime'
    }
  }

  return (
    <Box
      display="flex"
      sx={{
        height: '104px',
        boxShadow:
          '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        borderRadius: '0.5rem',
        border: '1px',
        borderColor: 'rgba(255, 255, 255, 0.12)',
        backgroundColor: 'white',
        flexDirection: 'row',
        padding: 1,
        gap: 1
      }}
      onClick={handleClick}
    >
      <Box className="aspect-square h-auto">
        <Box
          className="rounded-lg w-full h-full"
          component="img"
          src={props.data.recipe.images.THUMBNAIL.url}
          alt={props.data.recipe.label}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={1}
      >
        <p className="text-sm ml-2 mr-1 text-ellipsis overflow-hidden">
          {props.data.recipe.label}
        </p>
        <Chip
          label={mealLabel(props.idx)}
          size="small"
          className="w-fit ml-1"
        />
      </Box>
    </Box>
  )
}

export default MealCard
