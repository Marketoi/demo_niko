rm -f Dockerfile
cp Dockerfile_local Dockerfile
chmod 400 Dockerfile
docker build -t demo_niko .
