'use client'

import { motion } from 'motion/react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChefHat, Globe, Heart, Users, Shield, Star } from 'lucide-react'
import Link from 'next/link'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const features = [
    {
      icon: <Globe className='h-6 w-6' />,
      title: 'Global Cuisine Exploration',
      description:
        'Discover diverse recipes from around the world with our extensive database.',
    },
    {
      icon: <ChefHat className='h-6 w-6' />,
      title: 'Expertly Curated Recipes',
      description:
        'Every recipe is carefully selected and tested to ensure quality and authenticity.',
    },
    {
      icon: <Heart className='h-6 w-6' />,
      title: 'Save & Organize Favorites',
      description:
        'Save your favorite recipes and create personalized collections for future use.',
    },
    {
      icon: <Users className='h-6 w-6' />,
      title: 'Community Driven',
      description:
        'Share your own recipes and connect with other food enthusiasts in our community.',
    },
    {
      icon: <Shield className='h-6 w-6' />,
      title: 'Dietary Preferences',
      description:
        'Filter recipes based on your dietary needs and restrictions.',
    },
    {
      icon: <Star className='h-6 w-6' />,
      title: 'Personalized Recommendations',
      description:
        'Get smart recommendations based on your cooking preferences and history.',
    },
  ]

  // Team data
  const team = [
    {
      name: 'Asharib Ali',
      role: 'Lead Developer',
      bio: 'Passionate about creating  cooking experiences through technology.',
    },
    {
      name: 'Ashish Jaiswar',
      role: 'Culinary Expert',
      bio: 'Bringing authentic flavors and cooking techniques to the digital world.',
    },
  ]

  return (
    <motion.div
      className='container mx-auto px-4 pt-20 pb-8 max-w-6xl'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <motion.div
        className='text-center mb-16'
        variants={itemVariants}
      >
        <h1 className='text-4xl font-bold mb-4'>About Recipe Finder</h1>
        <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
          Recipe Finder is your ultimate culinary companion, designed to help
          you discover, save, and create delicious meals from around the world
          with ease and joy.
        </p>
      </motion.div>

      <motion.div
        className='mb-16'
        variants={itemVariants}
      >
        <Card className='bg-primary/5 border-primary/20'>
          <CardContent className='pt-6'>
            <h2 className='text-2xl font-semibold mb-4 text-center'>
              Our Mission
            </h2>
            <p className='text-lg text-center'>
              To inspire home cooks and food enthusiasts by providing access to
              thousands of curated recipes, cooking techniques, and culinary
              knowledge from diverse cultures around the world. We believe that
              cooking should be accessible, enjoyable, and rewarding for
              everyone.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        className='mb-16'
        variants={itemVariants}
      >
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Why Choose Recipe Finder?
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className='h-full transition-all duration-300 hover:shadow-md'>
                <CardHeader>
                  <div className='flex items-center mb-4'>
                    <div className='p-2 rounded-full bg-primary/10 mr-3'>
                      {feature.icon}
                    </div>
                    <CardTitle className='text-xl'>{feature.title}</CardTitle>
                  </div>
                  <CardDescription className='text-base'>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className='mb-16'
        variants={itemVariants}
      >
        <h2 className='text-3xl font-bold mb-8 text-center'>Our Technology</h2>
        <Card>
          <CardHeader>
            <CardTitle className='text-center'>
              Built with Modern Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='text-center p-4 rounded-lg bg-secondary/50'>
                <h3 className='font-semibold'>Next.js 15</h3>
                <p className='text-sm text-muted-foreground'>
                  React framework with App Router
                </p>
              </div>
              <div className='text-center p-4 rounded-lg bg-secondary/50'>
                <h3 className='font-semibold'>shadcn/ui</h3>
                <p className='text-sm text-muted-foreground'>
                  Beautifully designed components
                </p>
              </div>
              <div className='text-center p-4 rounded-lg bg-secondary/50'>
                <h3 className='font-semibold'>Framer Motion</h3>
                <p className='text-sm text-muted-foreground'>
                  Smooth animations and transitions
                </p>
              </div>
              <div className='text-center p-4 rounded-lg bg-secondary/50'>
                <h3 className='font-semibold'>Tailwind CSS</h3>
                <p className='text-sm text-muted-foreground'>
                  Utility-first CSS framework
                </p>
              </div>
              <div className='text-center p-4 rounded-lg bg-secondary/50'>
                <h3 className='font-semibold'>Edamam API</h3>
                <p className='text-sm text-muted-foreground'>
                  Recipe data provider
                </p>
              </div>
              <div className='text-center p-4 rounded-lg bg-secondary/50'>
                <h3 className='font-semibold'>TypeScript</h3>
                <p className='text-sm text-muted-foreground'>
                  Type-safe development
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        className='mb-16'
        variants={itemVariants}
      >
        <h2 className='text-3xl font-bold mb-8 text-center'>Our Team</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className='text-center'>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className='text-base'>
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className='text-center'
        variants={itemVariants}
      >
        <h2 className='text-3xl font-bold mb-6'>Ready to Start Cooking?</h2>
        <p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
          Join thousands of home cooks who are already discovering new recipes
          and expanding their culinary skills with Recipe Finder.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button
            asChild
            size='lg'
            className='text-lg px-8'
          >
            <Link href='/recipes'>Explore Recipes</Link>
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='text-lg px-8'
          >
            Learn More
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About
