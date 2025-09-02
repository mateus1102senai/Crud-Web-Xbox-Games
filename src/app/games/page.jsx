import axios from 'axios';
import Link from 'next/link';
import { Card, Tag, Button, Divider, Row, Col, Typography, Space, Avatar } from 'antd';
import { 
  PlayCircleOutlined, 
  CalendarOutlined, 
  TeamOutlined, 
  GlobalOutlined,
  ArrowRightOutlined,
  TrophyOutlined,
  StarOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

async function getGames() {
  try {
    const res = await axios.get('https://api.sampleapis.com/xbox/games');
    console.log('API Response:', res.data.slice(0, 2));
    return res.data;
  } catch (error) {
    console.error('Erro na API:', error);
    return [];
  }
}

export default async function GamesPage() {
  const games = await getGames();
  
  if (!games || games.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <Card
          className="max-w-md mx-auto text-center"
          style={{
            background: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div className="p-8">
            <Avatar size={64} className="bg-red-500 mb-4" icon={<PlayCircleOutlined />} />
            <Title level={3} className="!text-white !mb-4">
              Erro ao carregar jogos
            </Title>
            <Paragraph className="!text-slate-400 !mb-6">
              Verifique se a API está funcionando corretamente
            </Paragraph>
            <Link href="/">
              <Button type="primary" size="large">
                Voltar ao Início
              </Button>
            </Link>
          </div>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho estilo Ant Design */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <Avatar size={64} icon={<TrophyOutlined />} className="bg-blue-500 mb-4" />
            <Title level={1} className="!text-white !mb-2">
              Coleção Xbox Games
            </Title>
            <Paragraph className="!text-slate-400 !text-lg !mb-6 max-w-2xl mx-auto">
              Explore nossa biblioteca com {games.length} títulos cuidadosamente catalogados
            </Paragraph>
            <Tag color="blue" className="px-4 py-1 text-sm">
              <StarOutlined className="mr-1" />
              {games.length} jogos disponíveis
            </Tag>
          </div>
        </div>

        {/* Grid de Cards estilo Ant Design */}
        <Row gutter={[24, 24]} className="mb-12">
          {games.slice(0, 16).map((game, index) => (
            <Col xs={24} sm={12} lg={8} xl={6} key={game.id}>
              <Card
                className="antd-game-card h-full"
                hoverable
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'rgba(30, 41, 59, 0.8)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  animationDelay: `${index * 100}ms`,
                }}
                bodyStyle={{ 
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
                actions={[
                  <Link href={`/games/${game.id}`} key="details">
                    <Button 
                      type="primary" 
                      icon={<ArrowRightOutlined />}
                      className="w-full"
                      size="large"
                    >
                      Ver Detalhes
                    </Button>
                  </Link>
                ]}
              >
                {/* Cabeçalho do Card */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <Title level={4} className="!text-white !mb-2 !leading-tight">
                      {game.name}
                    </Title>
                  </div>
                  <Tag color="processing" className="!ml-2">
                    #{game.id}
                  </Tag>
                </div>

                {/* Gêneros */}
                {game.genre && game.genre.length > 0 && (
                  <div className="mb-4">
                    <Text className="!text-slate-400 !text-sm !block !mb-2">
                      <PlayCircleOutlined className="mr-1" />
                      Gêneros
                    </Text>
                    <Space size={[4, 4]} wrap>
                      {game.genre.slice(0, 3).map((genero, index) => (
                        <Tag key={index} color="blue" className="!m-0">
                          {genero}
                        </Tag>
                      ))}
                      {game.genre.length > 3 && (
                        <Tag color="default">+{game.genre.length - 3}</Tag>
                      )}
                    </Space>
                  </div>
                )}

                {/* Desenvolvedores */}
                {game.developers && game.developers.length > 0 && (
                  <div className="mb-4">
                    <Text className="!text-slate-400 !text-sm !block !mb-2">
                      <TeamOutlined className="mr-1" />
                      Desenvolvedores
                    </Text>
                    <div className="bg-slate-700/30 rounded-lg p-3 border border-white/10">
                      <Text className="!text-white !font-medium">
                        {game.developers[0]}
                      </Text>
                      {game.developers.length > 1 && (
                        <Text className="!text-slate-400 !text-xs !block !mt-1">
                          +{game.developers.length - 1} outros
                        </Text>
                      )}
                    </div>
                  </div>
                )}

                {/* Publicadoras */}
                {game.publishers && game.publishers.length > 0 && (
                  <div className="mb-4">
                    <Text className="!text-slate-400 !text-sm !block !mb-2">
                      <GlobalOutlined className="mr-1" />
                      Publicadoras
                    </Text>
                    <div className="bg-slate-700/30 rounded-lg p-3 border border-white/10">
                      <Text className="!text-white !font-medium">
                        {game.publishers[0]}
                      </Text>
                      {game.publishers.length > 1 && (
                        <Text className="!text-slate-400 !text-xs !block !mt-1">
                          +{game.publishers.length - 1} outras
                        </Text>
                      )}
                    </div>
                  </div>
                )}

                {/* Datas de Lançamento */}
                {game.releaseDates && (
                  <div className="mt-auto">
                    <Text className="!text-slate-400 !text-sm !block !mb-2">
                      <CalendarOutlined className="mr-1" />
                      Lançamentos
                    </Text>
                    <Row gutter={8}>
                      {game.releaseDates.NorthAmerica && (
                        <Col span={12}>
                          <div className="bg-blue-500/10 border border-blue-400/30 rounded-md p-2 text-center">
                            <Text className="!text-blue-400 !text-xs !block">América</Text>
                            <Text className="!text-white !text-xs !font-mono">
                              {game.releaseDates.NorthAmerica}
                            </Text>
                          </div>
                        </Col>
                      )}
                      {game.releaseDates.Europe && (
                        <Col span={12}>
                          <div className="bg-green-500/10 border border-green-400/30 rounded-md p-2 text-center">
                            <Text className="!text-green-400 !text-xs !block">Europa</Text>
                            <Text className="!text-white !text-xs !font-mono">
                              {game.releaseDates.Europe}
                            </Text>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </div>
                )}
              </Card>
            </Col>
          ))}
        </Row>

        {/* Estatísticas estilo Ant Design */}
        <Card 
          className="antd-stats-card"
          style={{
            background: 'rgba(30, 41, 59, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px'
          }}
          bodyStyle={{ padding: '32px' }}
        >
          <div className="text-center mb-6">
            <Title level={2} className="!text-white !mb-2">
              Estatísticas da Coleção
            </Title>
          </div>
          
          <Row gutter={[32, 32]} className="text-center">
            <Col xs={24} md={8}>
              <Card
                className="stat-card bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-400/30"
                style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2))', border: '1px solid rgba(59, 130, 246, 0.3)' }}
              >
                <Title level={1} className="!text-blue-400 !mb-2">
                  {games.length}
                </Title>
                <Text className="!text-slate-400 !font-medium">Total de Jogos</Text>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card
                className="stat-card"
                style={{ background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))', border: '1px solid rgba(34, 197, 94, 0.3)' }}
              >
                <Title level={1} className="!text-green-400 !mb-2">
                  {new Set(games.flatMap(game => game.genre || [])).size}
                </Title>
                <Text className="!text-slate-400 !font-medium">Gêneros Únicos</Text>
              </Card>
            </Col>
            
            <Col xs={24} md={8}>
              <Card
                className="stat-card"
                style={{ background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(168, 85, 247, 0.2))', border: '1px solid rgba(147, 51, 234, 0.3)' }}
              >
                <Title level={1} className="!text-purple-400 !mb-2">
                  {new Set(games.flatMap(game => game.developers || [])).size}
                </Title>
                <Text className="!text-slate-400 !font-medium">Desenvolvedoras</Text>
              </Card>
            </Col>
          </Row>

          <Divider className="!border-white/20 !my-8" />
          
          <div className="text-center">
            <Tag color="processing" className="px-4 py-1">
              Exibindo {Math.min(16, games.length)} de {games.length} jogos
            </Tag>
          </div>
        </Card>
      </div>
    </main>
  );
}

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho responsivo */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-3 sm:mb-4">
            Coleção <span className="font-semibold texto-gradiente-sutil">Xbox Games</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg lg:text-xl mb-4 sm:mb-6 px-4 sm:px-0 max-w-2xl mx-auto leading-relaxed">
            Explore nossa biblioteca com {games.length} títulos cuidadosamente catalogados
          </p>
          <div className="inline-block vidro-profissional rounded-full px-4 sm:px-6 py-2 border border-white/10 mx-4 sm:mx-0">
            <span className="text-slate-300 font-medium text-sm sm:text-base">
              {games.length} jogos disponíveis
            </span>
          </div>
        </div>

        {/* Grid responsivo com cards elegantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {games.slice(0, 16).map((game, index) => (
            <div 
              key={game.id} 
              className="group relative card-animacao"
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Card principal com efeitos elegantes e responsividade */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/70 via-slate-900/90 to-slate-800/70 backdrop-blur-xl border border-white/10 hover:border-blue-400/30 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-blue-500/20 min-h-[420px] sm:min-h-[450px] lg:min-h-[480px] flex flex-col">
                
                {/* Padrão de fundo decorativo */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
                  <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full blur-xl"></div>
                </div>
                
                {/* Borda superior com gradiente */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
                
                {/* Badge ID com melhor posicionamento */}
                <div className="absolute top-3 right-3 z-20">
                  <div className="bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-lg border border-white/30 rounded-lg px-2 py-1 shadow-lg">
                    <span className="text-[10px] sm:text-xs font-mono text-white font-medium">#{game.id}</span>
                  </div>
                </div>

                {/* Status indicator */}
                <div className="absolute top-3 left-3 z-20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                </div>

                {/* Conteúdo do card com padding responsivo */}
                <div className="p-4 sm:p-5 lg:p-6 relative z-10 flex-1 flex flex-col">
                  
                  {/* Título com tipografia responsiva */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl lg:text-xl font-bold text-white leading-tight line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:via-white group-hover:to-purple-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-700">
                      {game.name}
                    </h3>
                  </div>

                  {/* Container de informações com melhor espaçamento */}
                  <div className="space-y-3 sm:space-y-4 flex-1">
                    
                    {/* Gêneros com design aprimorado */}
                    {game.genre && game.genre.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
                          <span className="text-slate-300 font-medium text-xs sm:text-sm">Gêneros</span>
                        </div>
                        <div className="flex flex-wrap gap-1 sm:gap-1.5">
                          {game.genre.slice(0, 2).map((genero, index) => (
                            <span 
                              key={index}
                              className="px-2 sm:px-2.5 py-1 bg-gradient-to-r from-blue-500/25 to-cyan-500/25 border border-blue-400/40 rounded-full text-blue-200 text-[10px] sm:text-xs font-medium backdrop-blur-sm hover:from-blue-500/40 hover:to-cyan-500/40 transition-all duration-300 badge-hover cursor-pointer hover:scale-105"
                            >
                              {genero}
                            </span>
                          ))}
                          {game.genre.length > 2 && (
                            <span className="px-2 sm:px-2.5 py-1 bg-gradient-to-r from-slate-500/25 to-gray-500/25 border border-slate-400/40 rounded-full text-slate-300 text-[10px] sm:text-xs backdrop-blur-sm badge-hover cursor-pointer hover:scale-105">
                              +{game.genre.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Desenvolvedores com layout compacto */}
                    {game.developers && game.developers.length > 0 && (
                      <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 border border-white/10 rounded-xl p-3 backdrop-blur-sm group-hover:border-green-400/20 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1 h-4 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full"></div>
                          <span className="text-slate-300 font-medium text-xs sm:text-sm">Desenvolvedores</span>
                        </div>
                        <div className="text-white font-medium text-xs sm:text-sm leading-relaxed">
                          {game.developers[0]}
                          {game.developers.length > 1 && (
                            <span className="text-slate-400 ml-1 text-[10px] sm:text-xs">
                              +{game.developers.length - 1} outros
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Publicadoras - layout similar aos desenvolvedores */}
                    {game.publishers && game.publishers.length > 0 && (
                      <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/40 border border-white/10 rounded-xl p-3 backdrop-blur-sm group-hover:border-purple-400/20 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-1 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
                          <span className="text-slate-300 font-medium text-xs sm:text-sm">Publicadoras</span>
                        </div>
                        <div className="text-white font-medium text-xs sm:text-sm leading-relaxed">
                          {game.publishers[0]}
                          {game.publishers.length > 1 && (
                            <span className="text-slate-400 ml-1 text-[10px] sm:text-xs">
                              +{game.publishers.length - 1} outras
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Datas de lançamento responsivas */}
                    {game.releaseDates && (
                      <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-white/20 rounded-xl p-3 sm:p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-1 h-4 bg-gradient-to-b from-yellow-400 to-orange-400 rounded-full"></div>
                          <span className="text-slate-300 font-medium text-xs sm:text-sm">Lançamentos</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px] sm:text-xs">
                          {game.releaseDates.NorthAmerica && (
                            <div className="bg-gradient-to-br from-blue-500/15 to-blue-600/15 border border-blue-400/30 rounded-lg p-2 text-center hover:from-blue-500/25 hover:to-blue-600/25 transition-all duration-300">
                              <div className="text-blue-300 font-medium mb-1">América</div>
                              <div className="text-white font-mono text-[9px] sm:text-[10px]">{game.releaseDates.NorthAmerica}</div>
                            </div>
                          )}
                          {game.releaseDates.Europe && (
                            <div className="bg-gradient-to-br from-green-500/15 to-green-600/15 border border-green-400/30 rounded-lg p-2 text-center hover:from-green-500/25 hover:to-green-600/25 transition-all duration-300">
                              <div className="text-green-300 font-medium mb-1">Europa</div>
                              <div className="text-white font-mono text-[9px] sm:text-[10px]">{game.releaseDates.Europe}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Rodapé com botão responsivo */}
                <div className="p-4 sm:p-5 lg:p-6 pt-0 mt-auto">
                  <Link 
                    href={`/games/${game.id}`}
                    className="block w-full"
                  >
                    <button className="w-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 hover:from-blue-500/50 hover:to-purple-500/50 border border-blue-400/40 hover:border-blue-400/60 text-white py-2.5 sm:py-3 rounded-xl font-medium text-sm sm:text-sm transition-all duration-300 backdrop-blur-sm group-hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25 relative overflow-hidden">
                      
                      {/* Efeito shimmer no hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <span className="flex items-center justify-center gap-2 relative z-10">
                        <span>Ver Detalhes</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>

                {/* Efeito de brilho aprimorado */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                
                {/* Borda inferior com gradiente */}
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas responsivas */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center px-4 sm:px-0">
          <div className="vidro-profissional rounded-2xl p-6 sm:p-8 lg:p-10 max-w-4xl mx-auto border border-white/10">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-6 sm:mb-8">
              Estatísticas da Coleção
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-2xl p-4 sm:p-6 mb-2 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                    {games.length}
                  </div>
                  <div className="text-slate-400 text-sm sm:text-base font-medium">Total de Jogos</div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-2xl p-4 sm:p-6 mb-2 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-2">
                    {new Set(games.flatMap(game => game.genre || [])).size}
                  </div>
                  <div className="text-slate-400 text-sm sm:text-base font-medium">Gêneros Únicos</div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-2xl p-4 sm:p-6 mb-2 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-2">
                    {new Set(games.flatMap(game => game.developers || [])).size}
                  </div>
                  <div className="text-slate-400 text-sm sm:text-base font-medium">Desenvolvedoras</div>
                </div>
              </div>
            </div>
          </div>

          {/* Indicador de paginação responsivo */}
          <div className="mt-6 sm:mt-8">
            <div className="vidro-profissional rounded-full px-4 sm:px-6 py-2 sm:py-3 inline-block border border-white/10">
              <span className="text-slate-300 text-xs sm:text-sm lg:text-base">
                Exibindo <span className="text-white font-semibold">{Math.min(16, games.length)}</span> de <span className="text-white font-semibold">{games.length}</span> jogos
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
