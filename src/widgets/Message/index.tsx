import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/system';

export const Message = ({messageText, fromUser}: {messageText: string, fromUser: boolean}) => {
  return ( 
    <Stack
      direction='row'
      justifyContent={'flex-end'}
      gap={2} 
      padding='9px'
      borderRadius={1.4}
      sx={{backgroundColor: '#0288d1'}}
      width='fit-content'
      alignSelf={fromUser ? 'flex-start' : 'flex-end'}
      flexDirection={fromUser ? 'row-reverse' : 'row'}  
    >  
      <Typography sx={{lineHeight: '1', maxWidth: '300px'}} color='white' variant='subtitle1'>{messageText}</Typography>
      <Typography sx={{lineHeight: '1'}} variant='subtitle1' color='#f5f5f5'>16:53</Typography>
    </Stack>
  )
}