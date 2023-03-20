import { Typography, Box } from "@mui/material";
import { TabPanelProps } from '../../types';
import Stack from "@mui/material/Stack/Stack"
import TextField from "@mui/material/TextField/TextField"


export function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{width: '100%', height: '100%'}}
      {...other}
      
    >
      {value === index && (
        <Box sx={{ p: 3, height: '100%' }}>
          <Stack
            alignItems="stretch"
            spacing={2}
            justifyContent='space-between'
            sx={{ height: '100%' }}
          >
            { children }
          </Stack>
        </Box>
      )}
    </div>
  );
}