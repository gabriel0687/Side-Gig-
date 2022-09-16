import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { SocialIcon } from 'react-social-icons';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  
});

class ControlledOpenSelect extends React.Component {
  state = {
    age: '',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Professional information
      </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="primary" name="saveAddress" value="yes" />}
              label="I would like to recieve Job Notifications (required if you want to view and accept Jobs)"
            />
          </Grid>
          <Typography variant="h6" gutterBottom>
            Upload Profile photo or avatar
      </Typography>
          <Grid item xs={12}>
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span" >
                Upload
        </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Areas of Expertise:
      </Typography>
          </Grid>

          <Grid item xs={12} sm={3}>
          <form autoComplete="off">
            <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'demo-controlled-open-select',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
            </form>
          </Grid>

          <Grid item xs={12} sm={3}>
            <FormControlLabel
              control={
                <Checkbox
                  value="checkedB"
                  color="primary"
                />
              }
              label="Category"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              control={
                <Checkbox
                  value="checkedB"
                  color="primary"
                />
              }
              label="Primary"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              control={
                <Checkbox
                  value="checkedB"
                  color="primary"
                />
              }
              label="Primary"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              control={
                <Checkbox
                  value="checkedB"
                  color="primary"
                />
              }
              label="Primary"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              control={
                <Checkbox
                  value="checkedB"
                  color="primary"
                />
              }
              label="Primary"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              control={
                <Checkbox
                  value="checkedB"
                  color="primary"
                />
              }
              label="Primary"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControlLabel
              control={
                <Checkbox
                  value="checkedB"
                  color="primary"
                />
              }
              label="Primary"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Business Phone number"
              name="Business Phone number"
              label="Business Phone number (Optional)"
              fullWidth
              autoComplete="billing Phone number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Business Email"
              name="Business Email"
              label="Business Email (Optional)"
              fullWidth
              autoComplete="billing Email"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="primary" name="saveAddress" value="yes" />}
              label="Show Social Media on Profile"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <SocialIcon network="facebook" style={{ height: 50, width: 50 }} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <SocialIcon network="instagram" style={{ height: 50, width: 50 }} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <SocialIcon network="linkedin" style={{ height: 50, width: 50 }} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <SocialIcon network="twitter" style={{ height: 50, width: 50 }} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="Facebook"
              name="Facebook"
              label="Facebook"
              fullWidth
              autoComplete="Facebook"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="Instagram"
              name="Instagram"
              label="Instagram"
              fullWidth
              autoComplete="Instagram"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="Linkedin"
              name="Linkedin"
              label="Linkedin"
              fullWidth
              autoComplete="Linkedin"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="Twitter"
              name="Twitter"
              label="Twitter"
              fullWidth
              autoComplete="Twitter"
            />
          </Grid>


        </Grid>
      </React.Fragment>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);