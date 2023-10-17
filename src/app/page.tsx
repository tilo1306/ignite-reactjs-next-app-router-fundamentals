import { Suspense } from 'react'
import { LongWaitComponent } from './components/long-wait-component'
import { GithubProfile } from './components/github-profile'

export default function Home() {
  return (
    <div>
      <h1>Home!</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum provident
        recusandae quas magnam distinctio adipisci officiis sapiente molestiae
        libero, illo ut deserunt velit fugiat, temporibus veniam, pariatur ipsam
        obcaecati. Hic!
      </p>

      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
