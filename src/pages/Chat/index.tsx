import React, { FC } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps } from '../../features/a11yProps';
import { TabPanel } from '../../widgets/TabPanel';
import { chatRoute } from '../../entities/routes';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { createRouteView } from 'atomic-router-react';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import { Message } from '../../widgets/Message';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
// import { TabContent } from '../../widgets/TabContent';
//это пиздец че за импорты
import { styled } from '@mui/material/styles';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

const Chat = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 524 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: '400px' }}
      >
        <Tab sx={{justifyContent: 'flex-start', gap: '10px'}} icon={
          <>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar alt="Л" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
          </>
        } iconPosition="start" label="Лапенко Иван" {...a11yProps(0)} />
        <Tab sx={{justifyContent: 'flex-start', gap: '10px' }} icon={
          <>
            <Avatar alt="Я" src="/static/images/avatar/1.jpg" />
          </>
        } iconPosition="start" label="Ярослав Менторович" {...a11yProps(1)} />
        <Tab sx={{justifyContent: 'flex-start', gap: '10px'}} icon={
          <>
            <Avatar alt="Я" src="/static/images/avatar/1.jpg" />
          </>
        } iconPosition="start" label="Ярослав Ресторанович" {...a11yProps(2)} />
        <Tab sx={{justifyContent: 'flex-start', gap: '10px'}}icon={
          <>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar alt="С" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
          </>
        } iconPosition="start" label="Снуп дог" {...a11yProps(3)} />
        <Tab sx={{justifyContent: 'flex-start', gap: '10px'}} icon={
          <>
            <Avatar alt="М" src="/static/images/avatar/1.jpg" />
          </>
        } iconPosition="start" label="Магнум Опус" {...a11yProps(4)} />
        <Tab sx={{justifyContent: 'flex-start', gap: '10px'}} icon={
          <>
            <Avatar alt="Р" src="/static/images/avatar/1.jpg" />
          </>
        } iconPosition="start" label="рамзес666" {...a11yProps(5)} />
        <Tab sx={{justifyContent: 'flex-start', gap: '10px'}} icon={
          <>
            <Avatar alt="С" src="/static/images/avatar/1.jpg" />
          </>
        } iconPosition="start" label="Светлана Павловна" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
          <Typography variant='h5'>Лапенко Иван</Typography>
          <Stack gap={1} width='100%'>
            <Message fromUser={true} messageText='fsdfds' />
            <Message fromUser={false} messageText='в школу с родителями сын хуйни' />
            <Message fromUser={false} messageText='fsdfds' />
            <TextField label="Введите ваше сообщение"  sx={{marginTop: 2}} />
          </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
    </>
  )
}

const chatPage = createRouteView({
	route: chatRoute,
	view: Chat
});

export default Chat