import React, { useEffect } from 'react'
import { fetchSliders } from '~/redux/productSlices/slidersSlices'
import { useAppDispatch, useAppSelector } from '~/hooks'

const Sliders: React.FC = () => {
  const dispatch = useAppDispatch()
  const { data: sliders, loading, error } = useAppSelector((state) => state.stateSlider)

  useEffect(() => {
    dispatch(fetchSliders())
  }, [dispatch])

  if (loading) {
    return <div>Loading sliders...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>Sliders</h1>
      {sliders?.map((slider) => (
        <div key={slider._id}>
          <img src={slider.url} alt={'hình ảnh'} />
        </div>
      ))}
    </div>
  )
}

export default Sliders
