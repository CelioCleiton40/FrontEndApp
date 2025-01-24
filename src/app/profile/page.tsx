import ProtectedRoute from '../components/ProtectedRoute';

const Profile: React.FC = () => {
  return (
    <ProtectedRoute>
      <div className="p-8">
        <h1 className="text-2xl font-bold">Perfil do Usuário</h1>
        <p>Bem-vindo ao seu perfil!</p>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;