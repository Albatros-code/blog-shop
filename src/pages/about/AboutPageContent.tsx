import styles from './AboutPageContent.module.css'
import React from 'react'
import { navigation } from '../../../config'
import Layout from '../../components/layout/Layout'

interface AboutPageContentProps {
  staticContent: {
    imageUrl: string
  }
}

const AboutPageContent = ({
  staticContent: {
    imageUrl
  }
}: AboutPageContentProps) => {
  
  return (
    <Layout activeLink={navigation.about.link}>
      <div className={styles.container}>
          <h1>My story</h1>
          <img src={imageUrl} className={styles.image}/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis urna. Quisque convallis elementum eros porta elementum. Donec pretium urna quis ex pharetra venenatis. Phasellus nec semper ipsum. Integer non interdum arcu. Integer eu dignissim ante, at faucibus eros. In eros risus, luctus a tincidunt condimentum, consectetur sit amet orci. Aliquam non lorem nec neque gravida sagittis at et nisl. Proin molestie eget mi id tempor.</p>
          <header>Who I am</header>
          <p>Nullam ac porttitor nisl. Etiam in laoreet leo. Cras viverra nisl nec odio aliquam varius. Aenean tellus magna, volutpat et ipsum a, blandit pellentesque orci. Nam eleifend neque non ex eleifend tempus. Fusce ut neque euismod, porttitor risus sit amet, fermentum nibh. Donec eget diam mattis, sollicitudin enim a, ornare nibh. Duis venenatis nibh nec ligula pharetra, mollis fringilla urna dictum. Etiam magna leo, elementum eu blandit a, pharetra ac diam.</p>
          <header>My background</header>
          <p>Nulla nec libero vitae risus convallis pretium. Aliquam porta enim non mi ultrices accumsan. Maecenas leo mi, pharetra condimentum gravida vel, auctor nec erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non egestas nibh, ac aliquet dui. Cras bibendum velit eget diam consequat, sit amet consectetur magna eleifend. Curabitur nisi dolor, fringilla vel odio at, euismod tincidunt neque. Morbi maximus elit eu ex elementum varius. Nunc finibus tincidunt arcu. Praesent volutpat dolor est, at tempor metus imperdiet ut. Nam tincidunt justo vitae massa maximus vulputate. Vestibulum pulvinar sagittis odio non vulputate. Curabitur pretium, lacus ut blandit finibus, elit justo aliquam tortor, sit amet varius magna nulla quis ante. Aliquam vel orci eu leo placerat bibendum.</p>
          <header>What I do</header>
          <p>Nam at mauris metus. Etiam sollicitudin ligula a ipsum euismod tincidunt. Phasellus a dui cursus, ornare odio id, elementum leo. Pellentesque sed tempor nulla, consequat pretium odio. Mauris posuere ex eu dui rhoncus lacinia. In placerat urna vel nibh porta, ut ultricies leo tincidunt. Nam sollicitudin facilisis arcu, vitae dignissim risus euismod et. Sed rutrum odio ante, sed convallis ligula molestie id. Aliquam blandit orci sit amet laoreet bibendum. Suspendisse vitae leo vitae mauris eleifend fringilla nec eget purus. Maecenas dictum nisl et nibh mollis, vitae posuere elit pharetra. Suspendisse ac urna quam. In lobortis consequat diam, eget maximus ligula malesuada a. Donec aliquet, risus sit amet euismod lacinia, nunc velit congue nulla, ullamcorper egestas mauris velit ut nisi. Suspendisse blandit ullamcorper quam, in ultrices metus pretium nec. Duis a ante massa.</p>
          <header>Where you can find me</header>
          <p>Nulla lobortis viverra odio, et euismod lectus lobortis nec. Donec hendrerit metus id ultrices sollicitudin. Suspendisse blandit felis at feugiat egestas. Sed sodales id leo rutrum interdum. Donec erat ex, dapibus sit amet eleifend id, mattis ut velit. Phasellus mollis vulputate erat, et ornare ligula consequat id. Proin venenatis metus id dolor auctor efficitur. Nullam blandit, sem eu ultricies aliquet, enim risus fermentum lectus, at faucibus ipsum est at nisl. Vestibulum ex nisl, tristique a interdum non, fringilla a mi. Duis nec est quis velit mattis sagittis sed a tortor. Vivamus a fringilla nibh. Integer faucibus placerat nisi, a dictum arcu. Curabitur fermentum et lacus ut mollis.</p>
      </div>
    </Layout>

  )
}

export default AboutPageContent