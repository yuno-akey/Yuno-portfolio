import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: '個人ポートフォリオサイト',
    description: 'このサイト。ReactとTypeScriptで作成しました。',
    link: 'https://github.com/yuno-akey/my-portfolio',
    imageUrl: 'https://opengraph.githubassets.com/22601a353594a33a758756a1118985148018d451481561578d04443538626153/yuno-akey/my-portfolio'
  },
  {
    title: '動体検知付監視カメラアプリ',
    description: 'PythonとOpenCVを使用して、動体検知機能を持つ監視カメラアプリケーションを開発しました。',
    link: 'https://github.com/yuno-akey/pyWebCamMonitor',
    imageUrl: 'https://opengraph.githubassets.com/e6a4505856417242171128362534568858273822151788730823224488358259/yuno-akey/pyWebCamMonitor' 
  },
];

const Projects: React.FC = () => {
    return (
      <section id="projects" style={{ padding: '4rem 2rem', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Projects</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              style={{ width: '300px', border: '1px solid #444', borderRadius: '8px', overflow: 'hidden', background: '#2a2e34', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div style={{ padding: '1.5rem' }}>
                <h3>{proj.title}</h3>
                <p style={{ marginTop: '0.5rem', color: '#ccc' }}>{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '1rem' }}>詳細を見る</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;