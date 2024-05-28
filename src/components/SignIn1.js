import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import styles from "./SignIn1.module.css";

const SignIn1 = ({ className = "" }) => {
  return (
    <div className={[styles.signIn, className].join(" ")}>
      <div className={styles.signUpParent}>
        <h1 className={styles.signUp}>Sign up</h1>
        <div className={styles.signUpTo}>
          Sign up to get rewards, and many more
        </div>
      </div>
      <form className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <TextField
            className={styles.frameChild}
            placeholder="Your Name"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d1d1d1" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "#d3e7eb",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { color: "#29252c" },
            }}
          />
          <TextField
            className={styles.frameItem}
            placeholder="Email"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d1d1d1" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "#d3e7eb",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { color: "#29252c" },
            }}
          />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.addressWrapper}>
            <div className={styles.address}>Address</div>
          </div>
          <div className={styles.countryParent}>
            <div className={styles.country}>Country</div>
            <img className={styles.frameInner} alt="" src="/frame-1531.svg" />
          </div>
        </div>
        <div className={styles.frameDiv}>
          <TextField
            className={styles.frameTextfield}
            placeholder="Username"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <img width="16px" height="16px" src="/frame-153-1.svg" />
              ),
            }}
            sx={{
              "& fieldset": { borderColor: "#d1d1d1" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "#d3e7eb",
                paddingRight: "11px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { color: "#29252c" },
            }}
          />
          <div className={styles.passwordParent}>
            <div className={styles.password}>Password</div>
            <img className={styles.frameIcon} alt="" src="/frame-153-2.svg" />
          </div>
        </div>
        <Button
          className={styles.button}
          disableElevation={true}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#1a1c1e",
            fontSize: "20",
            background: "#193170",
            borderRadius: "4px",
            "&:hover": { background: "#193170" },
            height: 62,
          }}
        >
          Sign Up
        </Button>
      </form>
      <div className={styles.orSignUp}>or, sign up with</div>
      <div className={styles.frameParent1}>
        <img
          className={styles.frameChild1}
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className={styles.frameChild2}
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
        <img
          className={styles.frameChild3}
          loading="lazy"
          alt=""
          src="/frame-158.svg"
        />
      </div>
    </div>
  );
};

SignIn1.propTypes = {
  className: PropTypes.string,
};

export default SignIn1;
