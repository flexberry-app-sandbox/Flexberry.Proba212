docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba21-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba21-java/app ../../..
