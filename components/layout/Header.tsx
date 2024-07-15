import { AppShellHeader, Burger, Group, Text } from '@mantine/core';
import Image from 'next/image';
import KnowItsLogo from '@/assets/images/know-its-icon.png';

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

function Header({ opened, toggle }: HeaderProps) {
  return (
    <AppShellHeader>
      <Group h="100%" px="md">
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          aria-controls="navbar"
          aria-label="Toggle navigation"
        />
        <Image
          priority
          src={KnowItsLogo}
          width={44}
          height={44}
          alt="Know-Its - A new note-taking app."
        />
        <Text size="xl" fw={700} c="yellow">
          know-its
        </Text>
      </Group>
    </AppShellHeader>
  );
}

export default Header;
