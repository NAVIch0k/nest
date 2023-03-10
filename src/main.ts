import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'

async function start() {
  const PORT = process.env.PORT || 5000
  const app = await NestFactory.create(AppModule,{cors:true})
  app.setGlobalPrefix('api');
  await app.listen(PORT, () => console.log(`server started ${PORT}`))
}

start()
