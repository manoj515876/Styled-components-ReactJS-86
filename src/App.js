import './App.css'

import {Heading, CustomedButton} from './styledComponents'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    <CustomedButton type="button">Click Me</CustomedButton>
    <CustomedButton type="button" outline>
      Click Me
    </CustomedButton>
  </>
)

export default App
