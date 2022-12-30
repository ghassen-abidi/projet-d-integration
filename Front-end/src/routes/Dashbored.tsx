import {SideBar} from '../components/SideBar'
import { DropzoneButton } from '../components/DropzoneButton';
import { createStyles, Select, TextInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';


const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },
}));
const Dashbored = () => {
    const { classes } = useStyles();
    return ( 
        <div style={{display:'flex',}}>
            
            <SideBar/>
            <div style={{
                 flex: 2 ,
                 padding:'50px',

                 }}>
                <h1>Add Event</h1>
                <div>
                    <TextInput label="Shipping address" placeholder="15329 Huston 21st" classNames={classes} />

                    <Select
                        style={{ marginTop: 20, zIndex: 2 }}
                        data={['React', 'Angular', 'Svelte', 'Vue']}
                        placeholder="Pick one"
                        label="Your favorite library/framework"
                        classNames={classes}
                    />

                    <DatePicker
                        style={{ marginTop: 20 }}
                        label="Departure date"
                        placeholder="When will you leave?"
                        classNames={classes}
                        clearable={false}
                    />
            </div>

                <DropzoneButton/>
            </div>
            <div style={{
                flex:2,
                 maxHeight: '100vh',
                  overflowY: 'scroll' ,
                  padding:'25px',
                  display:'grid',
                    placeItems:'center',
                  overflowX:'hidden',
                 
                  
                  }}>
                <img style={{height:'400px',width:'400px'}} src='/images/photoLogin.svg' />
            </div>
        </div>
     );
}
 
export default Dashbored;
