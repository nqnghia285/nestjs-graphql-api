yarn migrate:dev
bash scripts/generate-and-copy-prisma-nestjs-graphql-to-fe.sh
bash scripts/build-fe-copy-to-public.sh
yarn start:dev