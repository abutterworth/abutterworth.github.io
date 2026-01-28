import { Link } from 'react-router-dom'

const items = [
  {
    year: '2020',
    slug: 'fish-scales',
    img: '2020/fish-scales.png',
    alt: 'Fish',
    title: 'Fish',
  },
  {
    year: '2020',
    slug: 'wavy-things',
    img: '2020/wavy-things.png',
    alt: 'Wavy Things',
    title: 'Wavy Things',
  },
  {
    year: '2012',
    slug: 'gaussian-circles',
    img: '2012/gaussian-circles.png',
    alt: 'Gaussian Circles',
    title: 'Gaussian Circles',
  },
  {
    year: '2012',
    slug: 'budding-circles',
    img: '2012/budding-circles.png',
    alt: 'Budding Circles',
    title: 'Budding Circles',
  },
  {
    year: '2012',
    slug: 'spines',
    img: '2012/spines.png',
    alt: 'Back Into Processing',
    title: 'Back Into Processing',
  },
  {
    year: '2012',
    slug: '1d-animated-terrain',
    img: '2012/1d-animated-terrain.png',
    alt: '1D Animated Terrain Generator',
    title: '1D Animated Terrain Generator',
  },
  {
    year: '2012',
    slug: '1d-terrain',
    img: '2012/1d-terrain.png',
    alt: '1D Terrain Generator',
    title: '1D Terrain Generator',
  },
  {
    year: '2012',
    slug: 'fake-3d-gravity',
    img: '2012/fake-3d-gravity.png',
    alt: 'Fake 3D Gravity',
    title: 'Fake 3D Gravity',
  },
  {
    year: '2012',
    slug: 'planets-and-fun',
    img: '2012/planets-and-fun.png',
    alt: 'Planets & Fun',
    title: 'Planets & Fun',
  },
  {
    year: '2012',
    slug: 'planets',
    img: '2012/planets.png',
    alt: 'Planets',
    title: 'Planets',
  },
  {
    year: '2012',
    slug: 'gravity-play-2',
    img: '2012/gravity-play-2.png',
    alt: 'Gravity Play 2',
    title: 'Gravity Play 2',
  },
  {
    year: '2012',
    slug: 'gravity-play',
    img: '2012/gravity-play.png',
    alt: 'Gravity Play',
    title: 'Gravity Play',
  },
  {
    href: 'https://adaminjapan.tumblr.com/',
    img: '2010/tarumi-present.jpeg',
    alt: 'Tumblr blog from my time in Japan',
    title: 'Tumblr blog from my time in Japan',
  },
]

export default function HomePage() {
  return (
    <ul style={listStyle}>
      {items.map((item, i) => (
        <li key={i} style={itemStyle}>
          {item.href ? (
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              <img
                src={'/' + item.img}
                alt={item.alt}
                title={item.title}
                style={imgStyle}
              />
            </a>
          ) : (
            <Link to={`/${item.year}/${item.slug}`}>
              <img
                src={'/' + item.img}
                alt={item.alt}
                title={item.title}
                style={imgStyle}
              />
              <h4 style={headingStyle}>{item.title}</h4>
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexWrap: 'wrap',
}

const itemStyle = {
  margin: '0.25rem',
  width: '20rem',
  flexGrow: 1,
}

const imgStyle = {
  width: '100%',
  aspectRatio: '1.618/1',
  objectFit: 'cover',
  borderRadius: 4,
  border: 'solid 1px rgba(255,255,255,.1)',
}

const headingStyle = { marginTop: 0, marginBottom: '0.5em' }
