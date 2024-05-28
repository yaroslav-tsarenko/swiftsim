import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FrameComponent12 from "../components/FrameComponent12";
import Footer3 from "../components/Footer3";
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.signin}>
      <FrameComponent12 />
      <section className={styles.frameParent}>
        <div className={styles.signInWrapper}>
          <div className={styles.signIn}>
            <div className={styles.frameGroup}>
              <div className={styles.signInParent}>
                <h1 className={styles.signIn1}>Sign in</h1>
                <p className={styles.signInTo}>
                  Sign in to your account to see products catered to you
                </p>
              </div>
              <form className={styles.frameContainer}>
                <div className={styles.usernameParent}>
                  <div className={styles.username}>Username</div>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/frame-153.svg"
                  />
                </div>
                <TextField
                  className={styles.frameItem}
                  placeholder="Password"
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
                      paddingRight: "28px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": { color: "#29252c" },
                  }}
                />
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
                  }}
                >
                  Sign In
                </Button>
              </form>
              <div className={styles.orSignIn}>or, sign in with</div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameInner}
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className={styles.frameChild1}
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.rectangleIcon}
          loading="lazy"
          alt=""
          src="/rectangle-49@2x.png"
        />
      </section>
      <Footer3 />
    </div>
  );
};

export default SignIn;
