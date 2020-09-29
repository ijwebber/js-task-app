main:
	tmux split-window 'cd client ; npm start' 
	cd api ; npm run devStart