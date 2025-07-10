import React from 'react';

import { FaTwitter, FaGithub } from 'react-icons/fa';

import profileImage from '../assets/profile.png'; 

const Profile: React.FC = () => {
  return (
    <section id="profile" style={{ padding: '4rem 2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Profile</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
        <img src={profileImage} alt="Yuno Akiba" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        <div>
          <h3>秋場 由乃 (Yuno Akiba)</h3>
          <p>機械学習やPythonを用いた顧客の要望に応じたツール、アプリケーションの開発に非常に志向を置くエンジニアです。<br />
            プロピアニストとしての伴奏やアンサンブル等コミュニケーションの経験を活かし、ユーザー体験の向上を目指したプロジェクトを志向しています。<br />
            また、バーでのイベント企画や運営にも携わり、コミュニティとのつながりを大切にしています。
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <a href="https://twitter.com/yunomicx" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} />
            </a>
            <a href="https://github.com/yuno-akey" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '3rem auto 0' }}>
        <h3>略歴</h3>
        <p>2018年よりプロピアニストとして活動を開始する。生徒複数への全般に渡る教導やリサイタル活動・バーやレストラン等での演奏を重ね活躍する。</p>
        <p>2022年よりフリーランスエンジニアとしての活動を開始。Pythonを用いた顧客の要望に応じたツール等の開発に注力し、ユーザー体験の向上を目指す。</p>
        <p>2024年より株式会社未来にて、バーでの全般スタッフ及びキャストとしてのイベントの企画及び運営・参加・フィードバックを行う。</p>
        
        <h3>職務経歴</h3>
        <p>プロピアニスト (2018年4月 - 2024年6月)<br />
        - 生徒複数への全般に渡る教導<br />
        - リサイタル活動<br />
        - バーやレストラン等での演奏<br />
        - 楽譜の受託制作、販売委託や作曲の受託制作<br />
        </p>
        <p>フリーランスエンジニア (2022年1月 - 2024年12月)<br />
        - Pythonを用いた顧客の要望に応じたツール等の開発<br />
        - ユーザー体験の向上を目指したプロジェクトの推進<br />
        </p>
        <p>株式会社未来 (2024年8月 - 2024年12月)<br />
        - バーでの全般スタッフ及びキャストとしてのイベントの企画及び運営・参加・フィードバック<br />
        </p>
      </div>
    </section>
  );
};

export default Profile;