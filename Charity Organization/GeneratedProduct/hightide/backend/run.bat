echo SELECT 'CREATE DATABASE aisco_product_hightide' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'aisco_product_hightide') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/aisco_product_hightide"
java -cp aisco.product.hightide --module-path aisco.product.hightide -m aisco.product.hightide