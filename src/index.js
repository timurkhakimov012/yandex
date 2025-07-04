import { createRoot } from 'react-dom/client';
import App from './components/App';
import './reset.css';
import './styles.css';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
