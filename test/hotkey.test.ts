import { fireEvent, render } from '@testing-library/vue'
import type { RemoveHandler } from '../src'
import useHotkey from '../src'

test('hotkey works', async () => {
  let triggered = false

  const { container, unmount } = render({
    template: '<div></div>',
    setup() {
      useHotkey([
        {
          keys: ['ctrl', 'b'],
          handler() {
            triggered = true
          },
        },
      ])
    },
  })

  expect(triggered).toBeFalsy()

  await fireEvent.keyDown(window, { key: 'Control' })
  await fireEvent.keyDown(window, { key: 'b' })

  expect(triggered).toBe(true)

  await fireEvent.keyUp(container, { key: 'Control' })
  await fireEvent.keyUp(container, { key: 'b' })
  unmount()
})

test('hotkey gets removed when component unmounts', async () => {
  let triggered = false

  const { container, unmount } = render({
    template: '<div></div>',
    setup() {
      useHotkey([
        {
          keys: ['ctrl', 'space'],
          handler() {
            triggered = true
          },
        },
      ])
    },
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
  let stopArr: RemoveHandler[] = []
  const { container, unmount } = render({
    template: '<div></div>',
    setup() {
      stopArr = useHotkey([
        {
          keys: ['ctrl', 'b'],
          handler() {
            triggered = true
          },
        },
      ])
    },
  })

  expect(triggered).toBeFalsy()

  await fireEvent.keyDown(container, { key: 'Control' })
  await fireEvent.keyDown(container, { key: 'b' })

  expect(triggered).toBeTruthy()

  await fireEvent.keyUp(container, { key: 'Control' })
  await fireEvent.keyUp(container, { key: 'Space' })

  stopArr.forEach(fn => fn())

  triggered = false

  await fireEvent.keyDown(container, { key: 'Control' })
  await fireEvent.keyDown(container, { key: 'b' })

  expect(triggered).toBeFalsy()

  await fireEvent.keyUp(container, { key: 'Control' })
  await fireEvent.keyUp(container, { key: 'b' })
  unmount()
})

test('setting repeat to true works', async () => {
  let timesTriggered = 0

  const { container, unmount } = render({
    template: '<div></div>',
    setup() {
      useHotkey([
        {
          keys: ['ctrl', 'b'],
          repeat: true,
          handler() {
            timesTriggered += 1
          },
        },
      ])
    },
  })

  expect(timesTriggered).toBe(0)

  await fireEvent.keyDown(container, { key: 'Control' })
  await fireEvent.keyDown(container, { key: 'b' })

  expect(timesTriggered).toBe(1)

  await fireEvent.keyDown(container, { key: 'b', repeat: true })
  await fireEvent.keyDown(container, { key: 'b', repeat: true })
  await fireEvent.keyDown(container, { key: 'b', repeat: true })
  await fireEvent.keyDown(container, { key: 'b', repeat: true })
  await fireEvent.keyDown(container, { key: 'b', repeat: true })

  expect(timesTriggered).toBe(6)

  await fireEvent.keyUp(container, { key: 'Control' })
  await fireEvent.keyUp(container, { key: 'b' })
  unmount()
})

test('setting repeat to false works', async () => {
  let timesTriggered = 0

  const { container, unmount } = render({
    template: '<div></div>',
    setup() {
      useHotkey([
        {
          keys: ['ctrl', 'b'],
          repeat: false,
          handler() {
            timesTriggered += 1
          },
        },
      ])
    },
  })

  expect(timesTriggered).toBe(0)

  await fireEvent.keyDown(container, { key: 'Control' })
  await fireEvent.keyDown(container, { key: 'b' })

  expect(timesTriggered).toBe(1)

  await fireEvent.keyDown(container, { key: 'b', repeat: true })
  await fireEvent.keyDown(container, { key: 'b', repeat: true })
  await fireEvent.keyDown(container, { key: 'b', repeat: true })
  await fireEvent.keyDown(container, { key: 'b', repeat: true })
  await fireEvent.keyDown(container, { key: 'b', repeat: true })

  expect(timesTriggered).toBe(1)

  await fireEvent.keyUp(container, { key: 'Control' })
  await fireEvent.keyUp(container, { key: 'b' })
  unmount()
})
