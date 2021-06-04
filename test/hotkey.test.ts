import { fireEvent, render } from '@testing-library/vue'
import useHotkey from '../src'

test('hotkey works', async () => {
  let triggered = false

  const { container } = render({
    template: '<div></div>',
    setup () {
      useHotkey([
        {
          keys: ['ctrl', 'space'],
          handler () {
            triggered = true
          }
        }
      ])
    }
  })

  expect(triggered).toBeFalsy()

  await fireEvent.keyDown(container, { key: 'Control' })
  await fireEvent.keyDown(container, { key: 'Space' })

  expect(triggered).toBeTruthy()

  await fireEvent.keyUp(container, { key: 'Control' })
  await fireEvent.keyUp(container, { key: 'b' })
})

test('hotkey gets removed when component unmounts', async () => {
  let triggered = false

  const { container, unmount } = render({
    template: '<div></div>',
    setup () {
      useHotkey([
        {
          keys: ['ctrl', 'space'],
          handler () {
            triggered = true
          }
        }
      ])
    }
  })

  expect(triggered).toBeFalsy()

  unmount()

  await fireEvent.keyDown(container, { key: 'Control' })
  await fireEvent.keyDown(container, { key: 'Space' })

  expect(triggered).toBeFalsy()

  await fireEvent.keyUp(container, { key: 'Control' })
  await fireEvent.keyUp(container, { key: 'Space' })
})

test('removing hotkey with returned function works', async () => {
  let triggered = false

  const { container } = render({
    template: '<div></div>',
    setup () {
      const stop = useHotkey([
        {
          keys: ['ctrl', 'space'],
          handler () {
            triggered = true
          }
        }
      ])

      stop()
    }
  })

  expect(triggered).toBeFalsy()

  await fireEvent.keyDown(container, { key: 'Control' })
  await fireEvent.keyDown(container, { key: 'Space' })

  expect(triggered).toBeFalsy()

  await fireEvent.keyUp(container, { key: 'Control' })
  await fireEvent.keyUp(container, { key: 'Space' })
})

test('setting repeat to true works', async () => {
  let timesTriggered = 0

  const { container } = render({
    template: '<div></div>',
    setup () {
      useHotkey([
        {
          keys: ['ctrl', 'space'],
          repeat: true,
          handler () {
            timesTriggered += 1
          }
        }
      ])
    }
  })

  expect(timesTriggered).toBe(0)

  await fireEvent.keyDown(container, { key: 'Control' })
  await fireEvent.keyDown(container, { key: 'Space' })

  expect(timesTriggered).toBe(1)

  await fireEvent.keyDown(container, { key: 'Space', repeat: true })
  await fireEvent.keyDown(container, { key: 'Space', repeat: true })
  await fireEvent.keyDown(container, { key: 'Space', repeat: true })
  await fireEvent.keyDown(container, { key: 'Space', repeat: true })
  await fireEvent.keyDown(container, { key: 'Space', repeat: true })

  expect(timesTriggered).toBe(6)

  await fireEvent.keyUp(container, { key: 'Control' })
  await fireEvent.keyUp(container, { key: 'Space' })
})

test('setting repeat to false works', async () => {
  let timesTriggered = 0

  const { container } = render({
    template: '<div></div>',
    setup () {
      useHotkey([
        {
          keys: ['ctrl', 'space'],
          repeat: false,
          handler () {
            timesTriggered += 1
          }
        }
      ])
    }
  })

  expect(timesTriggered).toBe(0)

  await fireEvent.keyDown(container, { key: 'Control' })
  await fireEvent.keyDown(container, { key: 'Space' })

  expect(timesTriggered).toBe(1)

  await fireEvent.keyDown(container, { key: 'Space', repeat: true })
  await fireEvent.keyDown(container, { key: 'Space', repeat: true })
  await fireEvent.keyDown(container, { key: 'Space', repeat: true })
  await fireEvent.keyDown(container, { key: 'Space', repeat: true })
  await fireEvent.keyDown(container, { key: 'Space', repeat: true })

  expect(timesTriggered).toBe(1)

  await fireEvent.keyUp(container, { key: 'Control' })
  await fireEvent.keyUp(container, { key: 'Space' })
})
