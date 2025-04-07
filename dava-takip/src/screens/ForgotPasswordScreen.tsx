import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const forgotPasswordSchema = yup.object({
  email: yup.string().email('Geçerli bir e-posta adresi giriniz').required('E-posta adresi zorunludur'),
});

type ForgotPasswordFormData = {
  email: string;
};

export default function ForgotPasswordScreen({ navigation }: any) {
  const { control, handleSubmit, formState: { errors } } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordSchema)
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      // API çağrısı burada yapılacak
      console.log(data);
      alert('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Şifrenizi mi unuttunuz?</Text>
          <Text style={styles.subtitle}>E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim.</Text>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="E-posta"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                />
                {errors.email && (
                  <Text style={styles.errorText}>{errors.email.message}</Text>
                )}
              </View>
            )}
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.sendButtonText}>Şifre Sıfırlama Bağlantısı Gönder</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginButtonText}>
              Giriş sayfasına dön
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a365d',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#4a5568',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#f7fafc',
  },
  errorText: {
    color: '#e53e3e',
    fontSize: 14,
    marginTop: 5,
  },
  sendButton: {
    backgroundColor: '#4c51bf',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  sendButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  loginButton: {
    marginTop: 20,
  },
  loginButtonText: {
    color: '#4c51bf',
    textAlign: 'center',
    fontSize: 16,
  },
}); 