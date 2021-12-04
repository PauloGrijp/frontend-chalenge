import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { Vector } from 'tsparticles'

const incrementSpeed = 3
let minSpeed = 20
let maxSpeed = 1
let ascending = maxSpeed > minSpeed

export const customPathGenerator1 = {
  currentVelocity: 0,

  generate: function (particle: any) {
    const { currentVelocity } = this
    particle.retina.moveSpeed = currentVelocity

    return Vector.origin
  },
  init: function (container: any) {
    this.currentVelocity = minSpeed
  },
  update: function () {
    if (
      (ascending && this.currentVelocity < maxSpeed - incrementSpeed * 2) ||
      (!ascending && this.currentVelocity > maxSpeed + incrementSpeed * 2)
    ) {
      setTimeout(() => {
        this.currentVelocity = ascending
          ? this.currentVelocity + incrementSpeed
          : this.currentVelocity - incrementSpeed
      }, 50)
    }
  }
}

export default function Stars() {
  const particlesInit = useCallback((main) => {
    main.addPathGenerator('customPath', customPathGenerator1)
  }, [])


  return (
    <>
      <Particles
        init={particlesInit}
        options={{
          background: {
            color: {
              value: '#000000'
            }
          },
          particles: {
            move: {
              enable: true,
              speed: 2,
              direction: 'top',
              random: true,
              outMode: 'out',
              path: {
                enable: true, // this enables the path generator
                delay: {
                  value: 0 // this changes the delay of every custom path call
                },
                generator: 'customPath'
              }
            },
            number: {
              density: {
                enable: true
              },
              value: 200
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.5,
              },
              value: {
                min: 0.1,
                max: 0.5
              },
              animation: {
                speed: 0.5,
                minimumValue: 0.1
              }
            },
            size: {
              value: {
                min: 0.5,
                max: 2
              },
              animation: {
                speed: 0.5,
                minimumValue: 0.1
              }
            }
          }
        }}
      />
    </>
  )
}
