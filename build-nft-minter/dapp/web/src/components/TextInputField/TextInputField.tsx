import { chakra } from '@chakra-ui/react'
import { TextField as _TextField } from '@redwoodjs/forms'
const TextField = chakra(_TextField)

//interface TextInputFieldProps extends InputFieldProps {
//}

const TextInputField = (props) => {
  return (
    <TextField
      py={2}
      px={5}
      borderRadius={'full'}
      border="2px"
      borderColor={'gray.300'}
      w="full"
      {...props}
    />
  )
}

export default TextInputField
