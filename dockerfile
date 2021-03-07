# Specify which image we are using, I'm using the node image version 12 because I ran 
# node --version to check what version of node I currently have.
FROM node:12

# run command to create a new directory
RUN mkdir -p /usr/src/app

# WORKDIR sets the newly created directory as the working directory
# for any COPY, RUN, and CMD instructions in Dockerfile
WORKDIR /usr/src/app

# COPY lets me copy files or a whole directory from a source to a destination
# I am copying package.json file to the working directory
COPY package.json /usr/src/app/
# COPY package*.json ./

# RUN executes a command, npm install, which will download all dependencies in the package.json file copied
RUN npm install

# COPY will copy the entire local directory into the working directory to 
COPY . /usr/src/app

EXPOSE 8000

ENV PORT=8000

# ADD installs the /wait command from github repo
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
# RUN /wait in the terminal to allow usage of the /wait command
RUN chmod +x /wait
# CMD waits for mongo to set up before running npm start inside the created/instantiated container
CMD /wait && npm start

# CMD is a list of things that run within a container created by an image