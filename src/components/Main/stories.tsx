import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Mango Mango',
    description: 'Hey guy'
  }
} as Meta

export const Primary: Story = (args) => <Main {...args} />

Primary.args = {
  title: 'Hello World',
  description: 'Storybooks'
}

export const Secondary: Story = (args) => <Main {...args} />

Secondary.args = {
  title: 'Mango Mango',
  description: 'Hey guy'
}
