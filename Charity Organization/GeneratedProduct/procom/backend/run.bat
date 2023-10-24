echo SELECT 'CREATE DATABASE aisco_product_procom' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'aisco_product_procom') \gexec | psql "postgresql://postgres:postgres@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:postgres@localhost/aisco_product_procom"
java -cp aisco.product.procom --module-path aisco.product.procom -m aisco.product.procom