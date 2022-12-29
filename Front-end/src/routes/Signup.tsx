import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
    BackgroundImage,
  } from '@mantine/core';
import { Link } from 'react-router-dom'
import { IconFloatNone } from '@tabler/icons';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      backgroundImage:
        'url(/images/20944068.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '900px 600px',
    },
  
    form: {
        marginTop:'0px',
        marginLeft: '60%',
      maxWidth: 450,
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '100%',
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  }));
  
  export default function Signup() {
    const { classes } = useStyles();
    return (
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
            Welcome to IsetZg
          </Title>
          <TextInput label="First Name" placeholder="First Name" size="md" /> 
          <TextInput label="Last Name" placeholder="Last Name" size="md" />   
          <TextInput label="Email address" placeholder="hello@gmail.com" size="md" /> 
          <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
          <PasswordInput label="Password" placeholder="password verification" mt="md" size="md" />
          <Button fullWidth mt="xl" size="md" style={{backgroundColor:'dde4fe'}}>
            Singup
          </Button>
        </Paper>
      </div>
    );
  }