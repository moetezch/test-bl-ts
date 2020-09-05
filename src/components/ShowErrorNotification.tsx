import { notification } from 'antd'

const showErrorNotification = (message: string, description: string) => {
  return notification.error({
    message,
    duration: 0,
    description,
  })
}

export default showErrorNotification
