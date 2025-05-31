import React, { useState, useEffect } from 'react';

const fadeInAnimation = {
  animation: 'fadeIn 1s ease-in forwards',
  opacity: 0,
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: '#111',
    padding: '2rem',
  },
  monkeyEmoji: {
    fontSize: '3rem',
    marginBottom: '1rem',
    alignSelf: 'center',
  },
  card: {
    background: '#111',
    borderRadius: '12px',
    boxShadow: '0 0 20px #00ffea',
    padding: '3rem 2.5rem',
    width: '100%',
    maxWidth: '420px',
    color: '#00ffea',
    fontFamily: "'Orbitron', sans-serif",
    ...fadeInAnimation,
  },
  formGroup: {
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '0.5rem',
    fontWeight: '600',
    fontSize: '1rem',
    color: '#00ffea',
  },
  inputWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: '0.5rem 3.5rem 0.5rem 0.75rem',
    borderRadius: '4px',
    border: '1px solid #00ffea',
    fontSize: '1rem',
    outline: 'none',
    backgroundColor: '#222',
    color: '#00ffea',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  inputFocus: {
    borderColor: '#00ffea',
    boxShadow: '0 0 8px 2px #00ffea',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
  },
  toggleButton: {
    position: 'absolute',
    right: '0.75rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9rem',
    color: '#00ffea',
    padding: '0',
    transition: 'color 0.3s ease',
  },
  toggleButtonHover: {
    color: '#00b3a3',
  },
  errorText: {
    color: '#ff3864',
    marginTop: '0.5rem',
    fontSize: '0.875rem',
    animation: 'shake 0.3s',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#00ffea',
    color: '#000',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  },
  buttonHover: {
    backgroundColor: '#00b3a3',
    transform: 'scale(1.05)',
  },
  '@keyframes fadeIn': {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  '@keyframes shake': {
    '0%': { transform: 'translateX(0)' },
    '25%': { transform: 'translateX(-5px)' },
    '50%': { transform: 'translateX(5px)' },
    '75%': { transform: 'translateX(-5px)' },
    '100%': { transform: 'translateX(0)' },
  },
};

function App() {
  const [monkeyEyesClosed, setMonkeyEyesClosed] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    passwordMatch: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [animationStyle, setAnimationStyle] = useState({ opacity: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationStyle({ opacity: 1, transition: 'opacity 1s ease-in' });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrors({ passwordMatch: false });
      return;
    }
    setErrors({ passwordMatch: true });
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.monkeyEmoji}>
        {monkeyEyesClosed ? '🙈' : '🐵'}
      </div>
      <div style={{ ...styles.card, ...animationStyle }}>
        <h2 style={{ marginBottom: '1.5rem', fontWeight: '700', fontSize: '1.75rem', color: '#222' }}>Register</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <div style={styles.inputWrapper}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
            </div>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Password:
            </label>
            <div style={styles.inputWrapper}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.input}
                onFocus={() => setMonkeyEyesClosed(true)}
                onBlur={() => setMonkeyEyesClosed(false)}
              />
              <button
                type="button"
                onClick={toggleShowPassword}
                style={styles.toggleButton}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>
              Confirm Password:
            </label>
            <div style={styles.inputWrapper}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <button
                type="button"
                onClick={toggleShowConfirmPassword}
                style={styles.toggleButton}
                aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
              >
                {showConfirmPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {!errors.passwordMatch && (
              <p style={styles.errorText}>Passwords do not match.</p>
            )}
          </div>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
