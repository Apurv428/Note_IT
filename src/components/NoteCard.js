import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import {  makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import { green, pink, blue, deepPurple } from '@mui/material/colors';
const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === 'work') {
        return deepPurple[500] + '!important'
      }
      else if (note.category === 'money') {
        return green[500] + '!important'
      }
      else if (note.category === 'todos') {
        return pink[500] + '!important'
      }
      else{
        return blue[500] + '!important'

      }
    },
  }
})
    
  
  export default function NoteCard({ note, handleDelete }) {
    const classes = useStyles(note)
  
    return (
      <div>
        <Card elevation={1} className={classes.test}>
          <CardHeader
          avatar = {
            // <Avatar sx={{ bgcolor: deepPurple[500] }}>
            <Avatar className = {classes.avatar}>  
              {note.category[0].toUpperCase()}
            </Avatar>
          }
            action={
              <IconButton onClick={() => handleDelete(note.id)}>
                <DeleteIcon />
              </IconButton>
            }
            title={note.title}
            subheader={note.category}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              { note.details }
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
